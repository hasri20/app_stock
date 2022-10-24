import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Index({ auth, barang }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        namaBarang: "",
        deskripsi: "",
        jenisBarang: "",
        stokBarang: "",
        hargaJual: "",
        hargaBeli: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("barang.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Barang" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h1 className="text-2xl font-bold mb-4">
                        Input Stock Barang
                    </h1>
                    <form onSubmit={submit}>
                        <InputError message={errors.message} className="mt-2" />
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="nama_barang"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Nama Barang
                                </label>
                                <input
                                    type="text"
                                    id="nama_barang"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={data.namaBarang}
                                    placeholder="Panadol"
                                    onChange={(e) =>
                                        setData("namaBarang", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="deskripsi"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Deskripsi
                                </label>
                                <input
                                    type="deskripsi"
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={data.deskripsi}
                                    placeholder="Obat sakit kepala"
                                    onChange={(e) =>
                                        setData("deskripsi", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="jenis-barang"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Jenis Barang
                                </label>
                                <select
                                    id="jenis-barang"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) =>
                                        setData("jenisBarang", e.target.value)
                                    }
                                    value={data.jenisBarang}
                                >
                                    <option value="n\a">N\A</option>

                                    {jenis_barang.map((jenisBarang) => {
                                        return (
                                            <option
                                                value={jenisBarang.id}
                                                key={jenisBarang.id}
                                            >
                                                {jenisBarang.nama_jenis}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="stok-barang"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Stok Barang
                                </label>
                                <input
                                    type="number"
                                    id="stok-barang"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="99"
                                    value={data.stokBarang}
                                    onChange={(e) =>
                                        setData("stokBarang", e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="harga-jual"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Harga Jual
                                </label>
                                <input
                                    type="number"
                                    id="harga-jual"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="50000"
                                    value={data.hargaJual}
                                    onChange={(e) =>
                                        setData("hargaJual", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="harga-beli"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Harga Beli
                                </label>
                                <input
                                    type="number"
                                    id="harga-beli"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="30000"
                                    value={data.hargaBeli}
                                    onChange={(e) =>
                                        setData("hargaBeli", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <PrimaryButton className="mt-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
