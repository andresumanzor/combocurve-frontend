import { default as Image } from 'next/image';
import { useRouter } from 'next/router';
import { useFormContext } from 'react-hook-form';

import { InputWithTitle, SaveCancel } from '@components/FormElements';
import { getRandomCharacters } from '@shared/helpers/strings';

import arrowBack from '../../../../public/assets/arrow-back.webp';

const fieldsToListen = ['name', 'ratings', 'durationInHours'];

// this will help us reset all custom controlled and non-controlled
// components when reseting a Field's state without
// the need to reload the page
let renderKey = getRandomCharacters();

const BasicInformation = () => {
    const {
        getValues,
        formState: { dirtyFields },
    } = useFormContext();

    const router = useRouter();

    const currentMovieId = getValues('id');

    const canSave = Boolean(Object.keys(dirtyFields).find((field) => fieldsToListen.indexOf(field) >= 0));

    return (
        <div className="mx-[95px] mt-[3rem] w-inherit bg-white rounded-[25px] px-[8rem] py-[4rem]">
            <div className="flex flex-col">
                <div className="flex">
                    <button
                        onClick={() => router.push('/movies')}
                        className="cursor-pointer mr-2 opacity-50 hover:opacity-100"
                        type="button"
                    >
                        <Image src={arrowBack} alt="arrowBack" className="w-5" />
                    </button>
                    <h1 className="font-bold text-4xl leading-none my-0 leading-7">Basic information</h1>
                </div>

                <div className="mt-9">
                    <InputWithTitle fieldName="name" title="Name" />
                </div>
                <div className="flex flex-col mt-5">
                    <div className="flex flex-row justify-between">
                        <div className="w-[49%]">
                            <InputWithTitle fieldName="ratings" title="Rating" type="number" min={0} max={100} />
                        </div>
                        <div className="w-[49%]">
                            <InputWithTitle fieldName="durationInHours" title="Duration" />
                        </div>
                    </div>
                </div>
                {(!currentMovieId || canSave) && (
                    <div className="flex flex-col mt-12">
                        <SaveCancel
                            listenedToFields={fieldsToListen}
                            cancelText={currentMovieId ? 'Cancel' : 'Clear'}
                            onCancel={() => (renderKey = getRandomCharacters())}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export { BasicInformation };
