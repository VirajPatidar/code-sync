import React, { useState, useEffect } from 'react';
import { language } from '../../src/atoms';
import { useRecoilValue } from 'recoil';

// CODE MIRROR
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

// theme
    import 'codemirror/theme/monokai.css';

// modes
    import 'codemirror/mode/clike/clike';
    import 'codemirror/mode/css/css';
    import 'codemirror/mode/dart/dart';
    import 'codemirror/mode/django/django';
    import 'codemirror/mode/dockerfile/dockerfile';
    import 'codemirror/mode/go/go';
    import 'codemirror/mode/htmlmixed/htmlmixed';
    import 'codemirror/mode/javascript/javascript';
    import 'codemirror/mode/jsx/jsx';
    import 'codemirror/mode/markdown/markdown';
    import 'codemirror/mode/php/php';
    import 'codemirror/mode/python/python';
    import 'codemirror/mode/r/r';
    import 'codemirror/mode/rust/rust';
    import 'codemirror/mode/ruby/ruby';
    import 'codemirror/mode/sass/sass';
    import 'codemirror/mode/shell/shell';
    import 'codemirror/mode/sql/sql';
    import 'codemirror/mode/swift/swift';
    import 'codemirror/mode/xml/xml';
    import 'codemirror/mode/yaml/yaml';

// features
    import 'codemirror/addon/edit/closetag';
    import 'codemirror/addon/edit/closebrackets';
    import 'codemirror/addon/scroll/simplescrollbars.css';

//search
    import 'codemirror/addon/search/search.js';
    import 'codemirror/addon/search/searchcursor.js';
    import 'codemirror/addon/search/jump-to-line.js';
    import 'codemirror/addon/dialog/dialog.js';
    import 'codemirror/addon/dialog/dialog.css';

const Editor = () => {

    const lang = useRecoilValue(language);

    useEffect(() => {
        async function init() {
            Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: lang },
                    theme: 'monokai',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );
        }
        init();
    }, [lang]);

    return (
            <textarea id="realtimeEditor"></textarea>
    );
};

export default Editor;