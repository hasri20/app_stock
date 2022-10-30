<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\JenisBarang;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Barang/Index', [
            'barang' => DB::table('barangs')->join('jenis_barangs', 'barangs.jenis_barang_id', '=', 'jenis_barangs.id')->get(),
            'jenis_barang' => JenisBarang::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'namaBarang'    => ['required','string'],
            'deskripsi'     => ['required','string'], 
            'jenisBarang'   => ['required','integer'], 
            'stokBarang'    => ['required','integer'], 
            'hargaJual'     => ['required','integer'], 
            'hargaBeli'     => ['required','integer'], 
            ]);

        $barang = new Barang;

        $barang->nama_barang = $request->namaBarang;
        $barang->deskripsi = $request->deskripsi;
        $barang->jenis_barang_id = $request->jenisBarang;
        $barang->stok_barang = $request->stokBarang;
        $barang->harga_jual = $request->hargaJual;
        $barang->harga_beli = $request->hargaBeli;

        $barang->save();
 
        return redirect(route('barang.index'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function edit(Barang $barang)
    {
        return Inertia::render('Barang/Edit', [
            'barang' => DB::table('barangs')->where('id', $barang->id)->first(),
            'jenis_barang' => JenisBarang::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Barang  $barang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Barang $barang)
    {
        
        $barang->nama_barang = $request->namaBarang;
        $barang->deskripsi = $request->deskripsi;
        $barang->jenis_barang_id = $request->jenisBarang;
        $barang->stok_barang = $request->stokBarang;
        $barang->harga_jual = $request->hargaJual;
        $barang->harga_beli = $request->hargaBeli;

        $barang->save();
        return redirect(route('barang.index'));
    }
}