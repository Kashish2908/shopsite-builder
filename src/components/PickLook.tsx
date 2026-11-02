"use client";

import { useState } from "react";
import themes from "../data/themes";

export default function PickLook() {
    const [selectedTheme, setSelectedTheme] = useState("Dark");

    const activeTheme = themes.find((theme) => theme.name === selectedTheme)!;

    return (
        <section className="py-12 px-4 md:px-8 font-sans">
            {/* Heading */}
            <div className="text-center mb-10">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-500">
                    Make it yours
                </span>

                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3 text-gray-900">
                    Find your aesthetic.
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-3">
                    A storefront that feels like you.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.1fr] gap-8 items-start">
                {/* Live Preview */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-3 md:sticky md:top-8">
                    {/* Browser Header */}
                    <div className="flex items-center justify-between px-3 py-2 mb-3">
                        <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>

                        <span className="text-[10px] text-gray-400">
                            lakshmisarees.shoplet.in
                        </span>

                        <span className="text-gray-400 text-xs">•••</span>
                    </div>

                    {/* Store Preview */}
                    <div
                        className={`${activeTheme.bg} rounded-2xl overflow-hidden transition-colors duration-300`}
                    >
                        {/* Store Header */}
                        <div
                            className={`${activeTheme.header} ${activeTheme.text} p-6 transition-colors duration-300`}
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest opacity-60">
                                        Welcome to
                                    </p>

                                    <h3 className="text-2xl font-bold mt-1">Lakshmi Sarees</h3>

                                    <p className="text-xs mt-2 opacity-70">
                                        Tradition woven into every thread.
                                    </p>
                                </div>

                                <span className="text-2xl">✿</span>
                            </div>

                            <p className="text-[10px] mt-5 opacity-70">
                                Open daily · 10 AM – 9 PM
                            </p>
                        </div>

                        {/* Store Body */}
                        <div className="p-5">
                            <div className="flex gap-2 mb-5">
                                <button
                                    className={`${activeTheme.button} ${activeTheme.buttonText} text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-300`}
                                >
                                    Call Store
                                </button>

                                <button
                                    className={`border ${activeTheme.border} ${activeTheme.text} text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-300`}
                                >
                                    WhatsApp
                                </button>
                            </div>

                            <p className={`${activeTheme.text} text-xs font-semibold mb-3`}>
                                Explore Collections
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div
                                    className={`${activeTheme.card} rounded-xl p-3 transition-colors duration-300`}
                                >
                                    <div className="h-20 rounded-lg bg-linear-to-br from-pink-100 to-rose-200 flex items-center justify-center text-3xl overflow-hidden">
                                        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="saree collection" />
                                    </div>
                                    <p
                                        className={`${activeTheme.cardText} text-xs font-semibold mt-2`}
                                    >
                                        Silk Sarees
                                    </p>
                                    <p className={`${activeTheme.cardSub} text-[10px]`}>
                                        Explore collection
                                    </p>
                                </div>

                                <div
                                    className={`${activeTheme.card} rounded-xl p-3 transition-colors duration-300`}
                                >
                                    <div className="h-20 rounded-lg bg-linear-to-br from-amber-100 to-orange-200 flex items-center justify-center text-3xl overflow-hidden">
                                        <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1674718918254-8f96b77c12d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="designer wear" />
                                    </div>
                                    <p
                                        className={`${activeTheme.cardText} text-xs font-semibold mt-2`}
                                    >
                                        Designer Wear
                                    </p>
                                    <p className={`${activeTheme.cardSub} text-[10px]`}>
                                        Explore collection
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active Theme */}
                    <div className="flex justify-between items-center px-3 py-4">
                        <div>
                            <p className="text-xs text-gray-400">CURRENT THEME</p>
                            <p className="font-bold text-gray-900 mt-1">{activeTheme.name}</p>
                        </div>

                        <div className="flex gap-1.5">
                            <span
                                className={`w-5 h-5 rounded-full ring-1 ring-black/10 ${activeTheme.header}`}
                            />
                            <span
                                className={`w-5 h-5 rounded-full ring-1 ring-black/10 ${activeTheme.button}`}
                            />
                            <span
                                className={`w-5 h-5 rounded-full ring-1 ring-black/10 ${activeTheme.bg}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Theme Selector */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                            Choose your palette
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Explore different styles and find your perfect match.
                        </p>
                    </div>

                    {/* Theme Options */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {themes.map((theme) => {
                            const isSelected = selectedTheme === theme.name;

                            return (
                                <button
                                    key={theme.name}
                                    onClick={() => setSelectedTheme(theme.name)}
                                    aria-pressed={isSelected}
                                    className={`group text-left p-3 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5
                    ${isSelected
                                            ? `border-transparent bg-white shadow-md ring-2 ${theme.ring}`
                                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                                        }`}
                                >
                                    {/* Palette Colors */}
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <span
                                            className={`w-7 h-7 rounded-full ring-1 ring-black/10 ${theme.header}`}
                                        />

                                        <span
                                            className={`w-7 h-7 rounded-full ring-1 ring-black/10 ${theme.button} -ml-3 border-2 border-white`}
                                        />

                                        <span
                                            className={`w-7 h-7 rounded-full ring-1 ring-black/10 ${theme.bg} -ml-3 border-2 border-white`}
                                        />

                                        {isSelected && (
                                            <span className="ml-auto w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]">
                                                ✓
                                            </span>
                                        )}
                                    </div>

                                    {/* Theme Name */}
                                    <p className="text-sm font-semibold text-gray-900">
                                        {theme.name}
                                    </p>

                                    <p className="text-[10px] text-gray-400 mt-1">
                                        {theme.name}
                                    </p>
                                </button>
                            );
                        })}
                    </div>

                    {/* Selection Info */}
                    <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-400">YOUR SELECTED STYLE</p>

                            <p className="text-sm font-semibold text-gray-900 mt-1">
                                {activeTheme.name} Collection
                            </p>
                        </div>

                        <div className="text-right">
                            <span className="text-xs text-gray-500">
                                {themes.length} styles available
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}