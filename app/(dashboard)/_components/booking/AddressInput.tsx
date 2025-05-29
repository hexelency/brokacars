"use client";

import React, { useEffect} from "react";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

interface Suggestion {
    full_address: string;
}

interface AddressInputProps {
    label: string;
    value: string;
    setValue: (value: string) => void;
    suggestions: Suggestion[];
    setSuggestions: (value: Suggestion[]) => void;
    loading: boolean;
    setLoading: (value: boolean) => void;
    manualSelected: boolean;
    setManualSelected: (value: boolean) => void;
}

export const AddressInput: React.FC<AddressInputProps> = ({
    label,
    value,
    setValue,
    suggestions,
    setSuggestions,
    loading,
    setLoading,
    manualSelected,
    setManualSelected,
}) => {
    useEffect(() => {
        if (manualSelected) {
            setManualSelected(false);
            return;
        }

        if (!value.trim()) {
            setSuggestions([]);
            return;
        }

        const delayDebounce = setTimeout(() => {
            fetchSuggestions(value);
        }, 1000);

        return () => clearTimeout(delayDebounce);
    }, [value]);

    const fetchSuggestions = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/search-address?q=${encodeURIComponent(query)}`, {
                headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            setSuggestions(data?.suggestions || []);
        } catch (err) {
            console.error("Error fetching suggestions:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-0 sm:mt-4 w-full px-2 pb-1 sm:pb-1 sm:pr-2">
            <label className="text-[10px] text-slate-800">{label}</label>
            <Input
                type="text"
                className="mt-0 md:mt-1 border-2 border-slate-900/90"
                value={value}
                onChange={(e) => {
                    setManualSelected(false);
                    setValue(e.target.value);
                }}
            />
            <div className="relative">
                {loading && value.trim() && <Skeleton className="mt-0 md:mt-2 h-2 sm:h-4 w-24 rounded bg-gray-200" />}

                {!loading && suggestions.length > 0 && (
                    <div className="mt-0 md:mt-2 bg-transparent border rounded shadow-sm">
                        {suggestions
                            .filter(item => item.full_address && item.full_address.trim() !== "")
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="p-2 hover:bg-blue-200 cursor-pointer"
                                    onClick={() => {
                                        setValue(item.full_address);
                                        setSuggestions([]);
                                        setManualSelected(true);
                                    }}
                                >
                                    {item.full_address}
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};