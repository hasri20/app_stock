import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";

export default function Index({ auth, list_penjualan, summary }) {
    const [showToolTip, setShowToolTip] = useState(false);
    const [toolTipX, setToolTipX] = useState(0);
    const [toolTipY, setToolTipY] = useState(0);
    const [shownProfit, setShownProfit] = useState(0);

    const toolTipHandler = (e, profit) => {
        const posX = e.target.offsetLeft;
        const posY = e.target.clientHeight + 40;

        setToolTipX(posX);
        setToolTipY(posY);
        setShownProfit(profit);
        setShowToolTip(true);
    };

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
                                        key={barang.barang_id}
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

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12 pb-12">
                <div className="overflow-x-auto relative p-6 bg-white border-b border-gray-200">
                    <div className="md:flex md:justify-between md:items-center">
                        <div>
                            <h1 className="text-2xl font-bold mb-1">
                                Product Sales
                            </h1>
                            <p className="mb-2 text-gray-600 text-sm">
                                by Quantity
                            </p>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                                <div className="text-sm text-gray-700">
                                    Sales
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line my-8 relative">
                        {showToolTip && (
                            <div
                                className="p-0 m-0 z-10 shadow-lg rounded-lg absolute h-auto block"
                                style={{
                                    bottom: `${toolTipY}px`,
                                    left: `${toolTipX}px`,
                                }}
                            >
                                <div className="shadow-xs rounded-lg bg-white p-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <div>Profit:</div>
                                        <div className="font-bold ml-2">
                                            <span>{shownProfit}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex -mx-2 items-end mb-2">
                            {summary.map((barang) => {
                                const profit =
                                    (barang.harga_jual - barang.harga_beli) *
                                    barang.total;
                                return (
                                    <div
                                        className="px-2 w-1/6"
                                        key={barang.barang_id}
                                    >
                                        <div
                                            style={{
                                                height: `${barang.total * 5}px`,
                                            }}
                                            className="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative"
                                            onMouseEnter={(e) =>
                                                toolTipHandler(e, profit)
                                            }
                                            onMouseLeave={() =>
                                                setShowToolTip(false)
                                            }
                                        >
                                            <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm pointer-events-none">
                                                {barang.total}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div
                            className="border-t border-gray-400 mx-auto h-px"
                            style={{
                                width: `${100 - (1 / summary.length) * 100 + 3}
                                %`,
                            }}
                        ></div>
                        <div className="flex -mx-2 items-end">
                            {summary.map((barang) => {
                                return (
                                    <div
                                        className="px-2 w-1/6"
                                        key={barang.barang_id}
                                    >
                                        <div className="bg-red-600 relative">
                                            <div className="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto w-px"></div>
                                            <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm ">
                                                {barang.nama_barang}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
