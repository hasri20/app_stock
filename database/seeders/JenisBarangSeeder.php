<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JenisBarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('jenis_barangs')->insert([
            'nama_jenis' => 'Obat',
        ]);
        DB::table('jenis_barangs')->insert([
            'nama_jenis' => 'Peralatan Kantor',
        ]);
        DB::table('jenis_barangs')->insert([
            'nama_jenis' => 'Makanan',
        ]);
        DB::table('jenis_barangs')->insert([
            'nama_jenis' => 'Buku',
        ]);
    }
}