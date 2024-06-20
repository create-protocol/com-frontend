'use client';
/* eslint-disable react/no-unescaped-entities */

import React, {useEffect} from "react";
import Image from "next/image";
import {useAccount, useWriteContract, useWaitForTransactionReceipt} from 'wagmi';
import {contractConfig} from "@/contractInteraction/contractConfig";
import abi from '@/contractInteraction/abi.json';
import configs from "@/config.json";
import {toast, Slide} from "react-toastify";
import {toastOptions} from "@/data/toastOptions";
import Link from "next/link";

export default function Hero() {
    const {address, isConnected} = useAccount();
    const {writeContract, data: hash, error, isPending} = useWriteContract({contractConfig})
    const {isLoading, isSuccess, isError, data: hashResponse} = useWaitForTransactionReceipt({
        hash: hash,
    });

    const handleMint = async () => {

        if (!isConnected) {
            toast('Please connect your wallet.', toastOptions);
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

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/com.zip'; // Path to your ZIP file in the public directory
        link.download = 'com.zip'; // The name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
        <section className="relative pt-32 pb-10 md:pb-0 md:pt-0">
            {/*<picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">*/}
            {/*    <Image*/}
            {/*        width={1920}*/}
            {/*        height={900}*/}
            {/*        src="/img/gradient.jpg"*/}
            {/*        alt="gradient"*/}
            {/*        className="w-full"*/}
            {/*    />*/}
            {/*</picture>*/}
            {/*<picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">*/}
            {/*    <Image*/}
            {/*        width={1920}*/}
            {/*        height={900}*/}
            {/*        src="/img/gradient_dark.jpg"*/}
            {/*        alt="gradient dark"*/}
            {/*        className="w-full"*/}
            {/*    />*/}
            {/*</picture>*/}

            <div className="container h-full">
                <div className="grid md:h-screen h-full items-center gap-4 md:grid-cols-12 md:pt-10">
                    <div
                        className="col-span-6 lg:ml-[-76px] flex h-full flex-col items-center justify-center md:items-start md:pb-12 xl:col-span-4">
                        <h1 className="mb-4 text-center font-display text-3xl text-[#03b56a] md:text-left lg:text-4xl xl:text-5xl">
                            Evolving Digital IP, Democratized
                        </h1>
                        <p className="mb-8 text-center text-md dark:text-jacarta-200 md:text-left">
                            Redefine ownership through AI-driven Creative Object Models.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href='/create'
                                className=" rounded-full bg-[#03b56a] py-3 px-6 text-center font-semibold text-white  transition-all hover:bg-[#029e57] disabled:opacity-0.7 disabled:pointer-events-none"
                            >
                                Start building
                            </Link>
                            <Link
                                href='/explore'
                              className=" rtl:!mr-6 w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-[#03b56a] shadow-white-volume hover:shadow-none transition-all hover:bg-[#029e57] hover:text-white"
                            >
                              Explore
                            </Link>
                        </div>
                    </div>

                    <div className="col-span-6 xl:col-span-8">
                        <div
                            className="relative text-center md:pl-8 rtl:md:pr-8 !rtl:md:pl-0 md:text-right rtl:md:text-left">
                {/*            <svg*/}
                {/*                viewBox="0 0 200 200"*/}
                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                {/*                className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem] "*/}
                {/*            >*/}
                {/*                <defs>*/}
                {/*                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">*/}
                {/*                        <path*/}
                {/*                            d="*/}
                {/*    M 0, 100*/}
                {/*    C 0, 17.000000000000004 17.000000000000004, 0 100, 0*/}
                {/*    S 200, 17.000000000000004 200, 100*/}
                {/*        183, 200 100, 200*/}
                {/*        0, 183 0, 100*/}
                {/*"*/}
                {/*                            fill="#9446ED"*/}
                {/*                        ></path>*/}
                {/*                    </clipPath>*/}
                {/*                </defs>*/}
                {/*                <g clipPath="url(#clipping)">*/}
                {/*                    <image*/}
                {/*                        href="/img/hero/ico_landing_hero.png"*/}
                {/*                        width="200"*/}
                {/*                        height="200"*/}
                {/*                        clipPath="url(#clipping)"*/}
                {/*                    />*/}
                {/*                </g>*/}
                {/*            </svg>*/}

                            <Image
                                width={740}
                                height={602}
                                src="/img/banner.png"
                                alt="image"
                                className="mt-8 inline-block w-72 sm:w-full lg:w-[24rem] xl:w-[35rem]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
