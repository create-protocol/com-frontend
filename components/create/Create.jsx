/* eslint-disable react/no-unescaped-entities */
"use client";
import {useState} from "react";
import FileUpload from "./FileUpload";
import Image from "next/image";
import Link from "next/link";
import Activity from "@/components/manage/Activity";
import {collections3} from "@/data/collections";
import {useAccount} from "wagmi";
import {toast} from "react-toastify";
import {toastOptions} from "@/data/toastOptions";

const currencies = [
    {
        id: 1,
        src: "/img/chains/ETH.png",
        alt: "eth",
        text: "Ethereum",
    },
    {
        id: 2,
        src: "/img/chains/FLOW.png",
        alt: "flow",
        text: "Flow",
    },
    {
        id: 3,
        src: "/img/chains/FUSD.png",
        alt: "fusd",
        text: "FUSD",
    },
];
export default function Create() {
    const [currcentCollection, setCurrcentCollection] = useState(null);
    const [currcentCollection2, setCurrcentCollection2] = useState(null);
    const {address} = useAccount();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        files: [],
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('address--', address)
        if (!address) {
            toast('Please connect your wallet.', toastOptions);
            return
        }

        console.log('formData--', formData);
        // Here you can handle form submission, e.g., send data to the server
        setFormData({
            name: '',
            price: '',
            description: '',
            file: null,
        })
    };

    const isFormValid = () => {
        return (
            formData.name.trim() !== '' &&
            formData.price.trim() !== '' &&
            formData.description.trim() !== '' &&
            formData.files.length !== 0
        );
    };


    return (
        <section className="relative py-24">
            {/*<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">*/}
            {/*    <Image*/}
            {/*        width={1920}*/}
            {/*        height={789}*/}
            {/*        src="/img/gradient_light.jpg"*/}
            {/*        priority*/}
            {/*        alt="gradient"*/}
            {/*        className="h-full w-full"*/}
            {/*    />*/}
            {/*</picture>*/}
            <div className="container">
                {/* Tabs Nav */}
                <ul
                    className="nav nav-tabs scrollbar-custom mb-4 flex items-center justify-start overflow-x-auto overflow-y-hidden border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="create-new-com-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#create-new-com"
                            type="button"
                            role="tab"
                            aria-controls="create-new-com"
                            aria-selected="true"
                        >
              <span className="font-display text-base font-medium">
                Create
              </span>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"
                            id="merge-com-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#merge-com"
                            type="button"
                            role="tab"
                            aria-controls="merge-com"
                            aria-selected="false"
                        >
                            <span className="font-display text-base font-medium">Merge</span>
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    {/* create Tab */}
                    <div
                        className="tab-pane fade show active"
                        id="create-new-com"
                        role="tabpanel"
                        aria-labelledby="create-new-com-tab"
                    >
                        <h1 className="py-12 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                            Make a new Creative Object Model
                        </h1>
                        <div className="mx-auto max-w-[48.125rem]">
                            {/* File Upload */}
                            <div className='flex w-full justify-center'>
                                <FileUpload formData={formData} setFormData={setFormData}/>

                            </div>

                            <div className='flex items-center lg:justify-between justify-center flex-col lg:flex-row'>
                                <div className="mb-6 lg:w-[48%]">
                                    <label
                                        htmlFor="item-name"
                                        className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                    >
                                        Name<span className="text-red">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        id="item-name"
                                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-[#03b56a]/10 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-white dark:placeholder:text-jacarta-300"
                                        placeholder="Item name"
                                        required
                                    />
                                </div>

                                {/* External Link */}
                                <div className="mb-6 lg:w-[48%] ">
                                    <label
                                        htmlFor="item-external-link"
                                        className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                    >
                                        Price<span className="text-red">*</span>
                                    </label>
                                    {/*<p className="mb-3 text-2xs dark:text-jacarta-300">*/}
                                    {/*  We will include a link to this URL on this item's detail page, so*/}
                                    {/*  that users can click to learn more about it. You are welcome to*/}
                                    {/*  link to your own webpage with more details.*/}
                                    {/*</p>*/}
                                    <input
                                        required
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        type="text"
                                        id="item-external-link"
                                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-[#03b56a]/10 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-white dark:placeholder:text-jacarta-300"
                                        // placeholder="https://yoursite.io/item/123"
                                    />
                                </div>
                            </div>

                            {/* Name */}


                            {/* Description */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-description"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    Description<span className="text-red">*</span>
                                </label>
                                <p className="mb-3 text-2xs dark:text-jacarta-300">
                                    The description will be included on the item's detail page
                                    underneath its image. Markdown syntax is supported.
                                </p>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    id="item-description"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-[#03b56a]/10 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-white dark:placeholder:text-jacarta-300"
                                    rows="4"
                                    required
                                    placeholder="Provide a detailed description of your item."
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <div className='w-full flex justify-center'>
                                <button
                                    onClick={handleSubmit}
                                    disabled={!isFormValid()}
                                    className="cursor-pointer rounded-full bg-[#03b56a] py-3 mt-6 px-8 text-center font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-default"
                                >
                                    Create
                                </button>
                            </div>

                        </div>
                    </div>
                    {/* end create tab */}

                    {/* merge Tab */}
                    <div
                        className="tab-pane fade"
                        id="merge-com"
                        role="tabpanel"
                        aria-labelledby="merge-com-tab"
                    >
                        <h1 className="py-12 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white">
                            Merge
                        </h1>

                        <div className="mx-auto max-w-[48.125rem]">
                            {/* File Upload */}
                            {/*<FileUpload />*/}

                            {/* Name */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-name"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    Name<span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="item-name"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-[#03b56a]/10 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-white dark:placeholder:text-jacarta-300"
                                    placeholder="Item name"
                                    required
                                />
                            </div>


                            {/* Description */}
                            <div className="mb-6">
                                <label
                                    htmlFor="item-description"
                                    className="mb-2 block font-display text-jacarta-700 dark:text-white"
                                >
                                    Description
                                </label>
                                <p className="mb-3 text-2xs dark:text-jacarta-300">
                                    The description will be included on the item's detail page
                                    underneath its image. Markdown syntax is supported.
                                </p>
                                <textarea
                                    id="item-description"
                                    className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-[#03b56a]/10 focus:ring-[#03b56a] dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-white dark:placeholder:text-jacarta-300"
                                    rows="4"
                                    required
                                    placeholder="Provide a detailed description of your item."
                                ></textarea>
                            </div>

                            {/* Collection */}
                            <div className="relative">
                                <div>
                                    <label className="mb-2 block font-display text-jacarta-700 dark:text-white">
                                        COMs
                                    </label>
                                    <div className="mb-3 flex items-center space-x-2">
                                        <p className="text-2xs dark:text-jacarta-300">
                                            Please select COMs.
                                            <span
                                                className="inline-block"
                                                data-tippy-content="Moving items to a different collection may take up to 30 minutes."
                                            >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="ml-1 -mb-[3px] h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                    </svg>
                  </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="dropdown my-1 cursor-pointer">
                                    <div
                                        className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-3 px-3 dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-jacarta-300"
                                        role="button"
                                        id="item-collection"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span
                                            className="">{currcentCollection ? currcentCollection.name : 'Select com 1'}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                                        </svg>
                                    </div>

                                    <div
                                        className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-[#4A4A4A]"
                                        aria-labelledby="item-collection"
                                    >
                                        <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                                            {collections3.map((elm, i) => (
                                                <li key={i} onClick={() => setCurrcentCollection(elm)}>
                                                    <div
                                                        className={
                                                            elm.name == currcentCollection?.name
                                                                ? "cursor-pointer dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-[#156F49]"
                                                                : " cursor-pointer dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-[#156F49]"
                                                        }
                                                    >
                        <span className="flex items-center space-x-3">
                          <Image
                              width={64}
                              height={64}
                              src={elm.src}
                              className="h-8 w-8 rounded-full"
                              loading="lazy"
                              alt="avatar"
                          />
                          <span className="text-jacarta-700 dark:text-white">
                            {elm.name}
                          </span>
                        </span>
                                                        {currcentCollection?.name == elm.name && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                height="24"
                                                                className="mb-[3px] h-4 w-4 fill-[#03b56a]"
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path
                                                                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                            </svg>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown my-4 cursor-pointer">
                                    <div
                                        className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-3 px-3 dark:border-jacarta-600 dark:bg-[#4A4A4A] dark:text-jacarta-300"
                                        role="button"
                                        id="item-collection"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span
                                            className="">{currcentCollection2 ? currcentCollection2.name : 'Select com 2'}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            className="h-4 w-4 fill-jacarta-500 dark:fill-white"
                                        >
                                            <path fill="none" d="M0 0h24v24H0z"/>
                                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
                                        </svg>
                                    </div>

                                    <div
                                        className="dropdown-menu z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-[#4A4A4A]"
                                        aria-labelledby="item-collection"
                                    >
                                        <ul className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto">
                                            {collections3.map((elm, i) => (
                                                <li key={i} onClick={() => setCurrcentCollection2(elm)}>
                                                    <div
                                                        className={
                                                            elm.name == currcentCollection2?.name
                                                                ? "cursor-pointer dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-[#156F49]"
                                                                : " cursor-pointer dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-[#156F49]"
                                                        }
                                                    >
                        <span className="flex items-center space-x-3">
                          <Image
                              width={64}
                              height={64}
                              src={elm.src}
                              className="h-8 w-8 rounded-full"
                              loading="lazy"
                              alt="avatar"
                          />
                          <span className="text-jacarta-700 dark:text-white">
                            {elm.name}
                          </span>
                        </span>
                                                        {currcentCollection2?.name == elm.name && (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                width="24"
                                                                height="24"
                                                                className="mb-[3px] h-4 w-4 fill-[#03b56a]"
                                                            >
                                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                                <path
                                                                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                                            </svg>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className='w-full flex justify-center'>
                            <button
                                disabled
                                className="cursor-default rounded-full bg-[#03b56a] py-3 mt-6 px-8 text-center font-semibold text-white transition-all disabled:opacity-60"
                            >
                                Merge
                            </button>
                            </div>
                        </div>

                    </div>
                    {/* end merge tab */}

                </div>
            </div>
        </section>
    );
}
