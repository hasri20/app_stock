<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\Barang;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Penjualan/Index', [
            'list_barang' => Barang::all(),
        ]);
    }


    public function report()
    {
        return Inertia::render('Laporan/Index', [
            'list_penjualan' => DB::table('penjualans')->select('penjualans.*', 'barangs.nama_barang')->join('barangs', 'penjualans.barang_id', '=', 'barangs.id')->get(),
            'summary' => DB::table('penjualans')->select('penjualans.barang_id','barangs.nama_barang','barangs.harga_jual','barangs.harga_beli', DB::raw('sum(penjualans.jumlah) as total'))->groupBy('penjualans.barang_id','barangs.nama_barang','barangs.harga_jual','barangs.harga_beli' )->join('barangs', 'penjualans.barang_id', '=', 'barangs.id')->get()
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
            'idBarang' => ['required','integer'],
            'stokBarang' => ['required','integer'], 
        ]);

        $barang = Barang::where('id', $request->idBarang)->first();
        $current_stock = $barang->stok_barang;

        if($request->stokBarang > $current_stock){
            return back()->withErrors(['message'=> 'Pembelian melebihi stock barang']);
        }

            
        $penjualan = new Penjualan;
        $penjualan->barang_id = $request->idBarang;
        $penjualan->jumlah = $request->stokBarang;
        $penjualan->save();

        
        $barang->stok_barang = $current_stock - $request->stokBarang;
        $barang->save();
 
        return redirect(route('penjualan.index'));
    }

}