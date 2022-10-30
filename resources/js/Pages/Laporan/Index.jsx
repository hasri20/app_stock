import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Index({ auth, list_penjualan, summary }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Report Penjualan" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
                <div className="overflow-x-auto relative p-6 bg-white border-b border-gray-200">
                    <h1 className="text-2xl font-bold mb-4">
                        Report Penjualan
                    </h1>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="`col`" className="py-3 px-6">
                                    Nama Barang
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Jumlah
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Tanggal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {list_penjualan.map((penjualan) => {
                                return (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={penjualan.id}
                                    >
                                        <td className="py-4 px-6">
                                            {penjualan.nama_barang}
                                        </td>
                                        <td className="py-4 px-6">
                                            {penjualan.jumlah}
                                        </td>
                                        <td className="py-4 px-6">
                                            {penjualan.created_at}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
                <div className="overflow-x-auto relative p-6 bg-white border-b border-gray-200">
                    <h1 className="text-2xl font-bold mb-4">Summary</h1>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="`col`" className="py-3 px-6">
                                    Nama Barang
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total Terjual
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Keuntungan
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {summary.map((barang) => {
                                return (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={barang.id}
                                    >
                                        <td className="py-4 px-6">
                                            {barang.nama_barang}
                                        </td>
                                        <td className="py-4 px-6">
                                            {barang.total}
                                        </td>
                                        <td className="py-4 px-6">
                                            {(barang.harga_jual -
                                                barang.harga_beli) *
                                                barang.total}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
