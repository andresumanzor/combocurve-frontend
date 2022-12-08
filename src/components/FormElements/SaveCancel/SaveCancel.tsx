import { useFormContext } from 'react-hook-form';

type SaveCancelProps = {
    listenedToFields?: string[];
    onCancel?: () => void;
    cancelText?: string;
};

const SaveCancel = ({ listenedToFields, onCancel, cancelText = 'Cancel' }: SaveCancelProps) => {
    const {
        formState: { defaultValues },
        setValue,
        resetField,
    } = useFormContext();
    return (
        <div className="flex justify-end">
            <button
                type="button"
                className="w-24 h-12 bg-white border-none text-primary text-sm cursor-pointer"
                onClick={() => {
                    listenedToFields?.forEach((listenedField) => {
                        if (defaultValues) {
                            resetField(listenedField);
                            return setValue(listenedField, defaultValues[listenedField]);
                        }
                        return resetField(listenedField);
                    });
                    if (onCancel) {
                        onCancel();
                    }
                }}
            >
                {cancelText}
            </button>
            <button
                type="submit"
                className="w-24 h-12 bg-primary border-none text-white text-sm cursor-pointer rounded-[5px]"
            >
                Save
            </button>
        </div>
    );
};

export { SaveCancel };
