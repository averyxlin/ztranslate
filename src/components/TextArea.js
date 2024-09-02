import React from 'react'

const TextArea = ({isTranslate}) => {
  return (
    <div>
        <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
        <div className="h-screen flex items-center justify-center">
            <div
                className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <textarea
                    id="TranslateInput"
                    className="h-full w-full resize-none border-none align-top focus:ring-0 sm:text-sm p-3"
                    rows="4"
                    placeholder={isTranslate ? `Translate...` : `Translated Text`}
                    disabled={!isTranslate}
                ></textarea>
                {isTranslate && 
                    <div className="flex items-center justify-end gap-2 bg-white p-3">
                        <button
                            type="button"
                            className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                        >
                            Clear
                        </button>

                        <button
                            type="button"
                            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                            Translate
                        </button>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default TextArea