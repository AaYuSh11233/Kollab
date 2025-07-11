import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import { $createImageNode } from './ImageNode';

export default function ImagePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      // For demo, always use the provided image
      const src = '/assets/images/inner.jpg';
      editor.update(() => {
        const imageNode = $createImageNode(src, 'Demo image');
        editor.insertNodes([imageNode]);
      });
    };
    const editorElem = document.querySelector('.editor-input');
    if (editorElem) {
      editorElem.addEventListener('drop', handleDrop);
    }
    return () => {
      if (editorElem) {
        editorElem.removeEventListener('drop', handleDrop);
      }
    };
  }, [editor]);

  return null;
} 