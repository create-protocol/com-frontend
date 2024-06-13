'use client';
/* eslint-disable react/no-unescaped-entities */

import React, {useEffect} from "react";
import Image from "next/image";
import {useAccount, useWriteContract, useWaitForTransactionReceipt} from 'wagmi';
import {contractConfig} from "@/contractInteraction/contractConfig";
import abi from '@/contractInteraction/abi.json';
import configs from "@/config.json";
import {toast, Slide} from "react-toastify";

export default function Hero() {
    const {address, isConnected} = useAccount();
    const {writeContract, data: hash, error, isPending} = useWriteContract({contractConfig})
    const {isLoading, isSuccess, isError, data: hashResponse} = useWaitForTransactionReceipt({
        hash: hash,
    });

    const handleMint = async () => {

        if (!isConnected) {
            return;
        }

        writeContract({
            abi,
            address: configs.contractAddress,
            functionName: 'mint',
            args: [
                address,
                "1",
            ],
        })

    };

    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Slide,
    }

    useEffect(() => {
        if (isPending || isLoading) {
            console.log('Processing...')
        } else {
            if (error) {
                toast(error.shortMessage, toastOptions);
                console.log(error.shortMessage)
            } else if (isSuccess && hashResponse) {
                toast('Transaction Successful.', toastOptions);
                console.log('Transaction Successful')
            } else if (isError) {
                toast('Something went wrong.', toastOptions);
                console.log('Something went wrong')
            }
        }
    }, [isPending, isLoading])

    return (
        <section className="relative pb-10 pt-20 md:pt-32 ">
            <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
                <Image
                    width={1920}
                    height={900}
                    src="/img/gradient.jpg"
                    alt="gradient"
                    className="w-full"
                />
            </picture>
            <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
                <Image
                    width={1920}
                    height={900}
                    src="/img/gradient_dark.jpg"
                    alt="gradient dark"
                    className="w-full"
                />
            </picture>

            <div className="container h-full">
                <div className="grid h-full items-center gap-4 md:grid-cols-12">
                    <div
                        className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
                        <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                            Mint NFTs.
                        </h1>
                        <p className="mb-8 text-center text-lg dark:text-jacarta-200 md:text-left">
                            The world's largest digital marketplace for crypto collectibles
                            and non-fungible tokens
                        </p>
                        <div className="flex space-x-4">
                            <button
                                disabled={isPending || isLoading}
                                onClick={handleMint}
                                className="w-36 rounded-full bg-accent py-3 px-6 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark disabled:opacity-0.7 disabled:pointer-events-none"
                            >
                                {(isPending || isLoading) ? 'Processing...' : 'Mint'}
                            </button>
                            {/*<Link*/}
                            {/*  href="/collections"*/}
                            {/*  className=" rtl:!mr-6 w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"*/}
                            {/*>*/}
                            {/*  Explore*/}
                            {/*</Link>*/}
                        </div>
                    </div>

                    <div className="col-span-6 xl:col-span-8">
                        <div
                            className="relative text-center md:pl-8 rtl:md:pr-8 !rtl:md:pl-0 md:text-right rtl:md:text-left">
                            <svg
                                viewBox="0 0 200 200"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem] "
                            >
                                <defs>
                                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                                        <path
                                            d="
                    M 0, 100
                    C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                    S 200, 17.000000000000004 200, 100
                        183, 200 100, 200
                        0, 183 0, 100
                "
                                            fill="#9446ED"
                                        ></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#clipping)">
                                    <image
                                        href="/img/hero/ico_landing_hero.png"
                                        width="200"
                                        height="200"
                                        clipPath="url(#clipping)"
                                    />
                                </g>
                            </svg>

                            <Image
                                width={740}
                                height={602}
                                src="/img/hero/3D_elements.png"
                                alt="image"
                                className="absolute top-0 animate-fly md:-right-[10%] rtl:md:right-[10%]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
