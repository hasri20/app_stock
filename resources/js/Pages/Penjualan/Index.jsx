import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/inertia-react";

export default function Index({ auth, list_barang }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        idBarang: "",
        stokBarang: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("penjualan.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Penjualan" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12">
                <div className="p-6 bg-white border-b border-gray-200">
                    <h1 className="text-2xl font-bold mb-4">Input Penjualan</h1>
                    <form onSubmit={submit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="jenis-barang"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Nama Barang
                                </label>
                                <select
                                    id="jenis-barang"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) =>
                                        setData("idBarang", e.target.value)
                                    }
                                    value={data.idBarang}
                                    required
                                >
                                    <option value=""></option>
                                    {list_barang.map((barang) => {
                                        return (
                                            <option
                                                value={barang.id}
                                                key={barang.id}
                                            >
                                                {barang.nama_barang}
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
                                    Jumlah
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
                        </div>

                        <InputError message={errors.message} className="mt-2" />

                        <PrimaryButton className="mt-4" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
