"use client";
import React from "react";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NewPost() {
    const [bodyData, setBodyData] = React.useState<string>("<p>Hello from CKEditor&nbsp;5!</p><br/><br/>");
  return (
    <div>
      <h1>New Post</h1>
      <form className="flex flex-col mt-8">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="description">Description</label>
        <textarea id="description" />
        <label htmlFor="body">Body</label>
        <CKEditor
            editor={ ClassicEditor }
            data={bodyData}
            onReady={ editor => {
              // You can store the "editor" and use when it is needed.
              console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
              console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
              console.log( 'Focus.', editor );
            } }
            config={{
                toolbar: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    'blockQuote',
                    'insertTable',
                    'mediaEmbed',
                    'undo',
                    'redo'
                ]
            }}
        />

        <div>
          <button
            className={"bg-blue-500 text-white px-4 py-2 rounded-md mt-2"}
          >
            Yazı Oluştur
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
