import { default as Image } from 'next/image';
import { useFormContext } from 'react-hook-form';

import searchIcon from '../../../public/assets/search.webp';

interface Props {
    fieldName: string;
    placeholder?: string;
}

export const SearchInput = ({ fieldName, placeholder }: Props) => {
    const { register } = useFormContext();

    return (
        <div className="flex w-full">
            <div className="relative w-full text-gray-400 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center">
                    <Image
                        className="p-1 focus:outline-none ml-2"
                        src={searchIcon}
                        alt="Search"
                        width={28}
                        height={28}
                    />
                </span>

                <input
                    type="search"
                    placeholder={placeholder}
                    className="w-full text-gray-900 py-2 text-sm rounded-full pl-10 focus:outline-0 border border-solid border-gray-400 focus:border-primary"
                    {...register(fieldName)}
                />
            </div>
        </div>
    );
};
