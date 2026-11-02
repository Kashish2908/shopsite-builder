"use client";

import { useState } from "react";
import themes from "../data/themes";

type Theme = (typeof themes)[number];

const SHOP_TYPES = ["Clothing", "Grocery", "Medical", "Electronics", "Other"];

const DEFAULT_CATALOG = `# Sarees
Silk saree
Cotton saree
Chanderi saree
Banarasi saree
Linen saree
Georgette saree
# Dupattas
Chanderi dupatta
Phulkari dupatta
Bandhani dupatta`;

const input =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:bg-white focus:ring-2";

const label = "block text-xs font-semibold text-gray-700 mb-1.5";

export default function ShopForm({ theme }: { theme: Theme }) {
  const [name, setName] = useState("Lakshmi Sarees");
  const [type, setType] = useState("Clothing");
  const [hours, setHours] = useState("10am to 9pm");
  const [phone, setPhone] = useState("9876543210");
  const [address, setAddress] = useState("Fatehgunj, Vadodara");
  const [catalog, setCatalog] = useState(DEFAULT_CATALOG);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Parse catalog: "# Title" starts a category, other lines are products
  const products: { category: string; name: string }[] = [];
  const categories: string[] = [];
  let current = "Items";
  catalog
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      if (line.startsWith("#")) {
        current = line.replace(/^#+\s*/, "");
        if (!categories.includes(current)) categories.push(current);
      } else {
        products.push({ category: current, name: line });
      }
    });

  const activeCat = categories.includes(category) ? category : "All";

  const filtered = products.filter(
    (p) =>
      (activeCat === "All" || p.category === activeCat) &&
      p.name.toLowerCase().includes(query.toLowerCase())
  );
  const visible = showAll ? filtered : filtered.slice(0, 6);
  const hidden = filtered.length - visible.length;

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
        {/* Form */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-900">Shop details</h2>
          <p className="text-sm text-gray-500 mt-1">
            Your page updates live as you type.
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className={label}>Shop name</label>
              <input
                className={`${input} ${theme.ring}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={label}>Shop type</label>
                <select
                  className={`${input} ${theme.ring}`}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  {SHOP_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label}>Hours</label>
                <input
                  className={`${input} ${theme.ring}`}
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                />
              </div>
              <div>
                <label className={label}>Phone</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  className={`${input} ${theme.ring}`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className={label}>Address</label>
                <input
                  className={`${input} ${theme.ring}`}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-700">
                  Catalog
                </label>
                <span className="text-xs text-gray-400">
                  {products.length} products · {categories.length} categories
                </span>
              </div>
              <textarea
                rows={9}
                className={`${input} ${theme.ring} font-mono resize-y`}
                value={catalog}
                onChange={(e) => setCatalog(e.target.value)}
              />
              <p className="text-xs text-gray-400 mt-1.5">
                One product per line. A line starting with # makes a category.
              </p>
            </div>

            <button
              className={`w-full rounded-xl py-3 text-sm font-semibold transition hover:opacity-90 active:scale-[0.99] ${theme.button} ${theme.buttonText}`}
            >
              Publish shop page
            </button>
          </div>
        </div>

        {/* Phone preview */}
        <div className="md:sticky md:top-8 mx-auto w-full max-w-xs">
          <div className="rounded-[2.5rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden bg-gray-900">
            <div className={`${theme.bg} transition-colors duration-300`}>
              {/* Header */}
              <div
                className={`${theme.header} ${theme.text} px-5 pt-6 pb-5 transition-colors duration-300`}
              >
                <span className="inline-block rounded-full bg-white/70 text-gray-800 text-[10px] font-semibold px-2.5 py-1">
                  {type}
                </span>
                <h3 className="text-xl font-bold mt-2">{name || "Your shop"}</h3>
                <p className="text-xs mt-1 opacity-70">Open {hours}</p>
                {address && (
                  <p className="text-[11px] mt-0.5 opacity-60">{address}</p>
                )}
              </div>

              <div className="p-4 space-y-3">
                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className={`${theme.button} ${theme.buttonText} rounded-xl py-2 text-xs font-semibold transition-colors duration-300`}
                  >
                    Call
                  </button>
                  <button
                    className={`border ${theme.border} ${theme.text} rounded-xl py-2 text-xs font-semibold transition-colors duration-300`}
                  >
                    WhatsApp
                  </button>
                </div>

                {/* Search */}
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products"
                  className={`w-full rounded-xl ${theme.card} ${theme.cardText} placeholder:opacity-50 px-3 py-2 text-xs outline-none`}
                />

                {/* Category chips */}
                {categories.length > 0 && (
                  <div className="flex gap-1.5 overflow-x-auto">
                    {["All", ...categories].map((c) => (
                      <button
                        key={c}
                        onClick={() => setCategory(c)}
                        className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${
                          activeCat === c
                            ? `${theme.button} ${theme.buttonText}`
                            : `${theme.card} ${theme.cardText}`
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}

                {/* Product list */}
                <div className={theme.text}>
                  {visible.length === 0 && (
                    <p className="text-xs opacity-60 py-4 text-center">
                      No products found.
                    </p>
                  )}
                  {visible.map((p, i) => (
                    <div key={p.category + p.name + i}>
                      {(i === 0 || visible[i - 1].category !== p.category) && (
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-3 mb-1">
                          {p.category}
                        </p>
                      )}
                      <p className={`text-xs py-2 border-b ${theme.border}`}>
                        {p.name}
                      </p>
                    </div>
                  ))}
                  {hidden > 0 && (
                    <button
                      onClick={() => setShowAll(true)}
                      className="w-full text-center text-xs font-semibold pt-3 opacity-80"
                    >
                      Show more ({hidden})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}