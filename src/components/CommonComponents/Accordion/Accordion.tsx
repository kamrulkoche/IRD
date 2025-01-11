import Picture from "@/components/Picture/Picture";
import React, { useState } from "react";
import Categories from "../../../../public/svg/Categories.svg"

const Accordion = () => {
    // Set the first accordion as open by default (index 0)
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const categories = [
        {
            title: "Time of Dua",
            subtitle: "Subcategory: 7",
            count: 21,
            items: [
                "What is Dua",
                "Conditions for Dua to be successful",
                "The Methode Of Dua",
                "Before Dua",
                "During Dua",
                "Prerequisites of writing Dua and drinking it’s water",
                "The correct way to perform Dua for a small child",
            ],
        },
        {
            title: "Time of Dua",
            subtitle: "Subcategory: 1",
            count: 15,
            items: [
                "The servant is dependent on his Lord",
                "The most important thing to ask Allah for",
                "Ask for paradise & protection from fire",
                "Dua to remain steadfast on the religion",
                "Dua of good outcome in all deeds",
                "Seeking whatever good Allah can bestow",
                "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
            ],
        },
        {
            title: "Time of Dua",
            subtitle: "Subcategory: 1",
            count: 30,
            items: [
                "The servant is dependent on his Lord",
                "The most important thing to ask Allah for",
                "Ask for paradise & protection from fire",
                "Dua to remain steadfast on the religion",
                "Dua of good outcome in all deeds",
                "Seeking whatever good Allah can bestow",
                "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
            ],
        },
    ];

    return (
        <div className="max-w-md mx-auto border p-2 h-full">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg mb-4 shadow-sm"
                >
                    <button
                        className="flex justify-between items-center w-full px-4 py-3 hover:bg-gray-100 transition duration-300 rounded-lg"
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="flex gap-4">
                            <div className="bg-second-400 p-2 rounded-lg">
                                <Picture image={Categories}></Picture>
                            </div>
                            <div>
                                <h5 className="text-base font-medium text-second-100">{category.title}</h5>
                                <p className="text-sm text-gray-600 ">{category.subtitle}</p>
                            </div>
                            <div className="flex items-center space-x-4 ml-20">
                                <span className="text-sm text-gray-600">{category.count} Duas</span>
                            </div>
                        </div>

                    </button>
                    {openIndex === index && category.items.length > 0 && (
                        <div className="px-4 py-2 -ml-5 w-[22rem] h-full">
                            <ul className="space-y-4 relative pl-6">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 text-sm relative">
                                        <div className="absolute -left-0.5 top-1.5 w-1.5 h-1.5 bg-second-100 rounded-full"></div>
                                        {i !== category.items.length - 1 && (
                                            <div className="absolute left-0 top-4 h-full border-l-2 border-second-100"></div>
                                        )}
                                        <span className="ml-6">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
