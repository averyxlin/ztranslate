import React from 'react';

const TextArea = ({ isTranslate }) => {
  return (
    <div>
      <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
      <div className="flex items-center justify-center h-full"> 
        <div
          className="flex flex-col flex-grow min-h-[40vh] overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
        >
          <textarea
            id="TranslateInput"
            className="bg-white flex-grow w-full h-full resize-none border-none align-top focus:ring-0 sm:text-sm p-3" 
            rows="4"
            placeholder={isTranslate ? `Translate...` : `Translated Text`}
            disabled={!isTranslate}
          ></textarea>
          {isTranslate && 
            <div className="flex items-center justify-end gap-2 bg-white border-t border-gray-200 p-3">
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
  );
};

export default TextArea;
