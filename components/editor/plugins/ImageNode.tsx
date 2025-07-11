import { DecoratorNode, LexicalEditor, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
import * as React from 'react';

export type ImagePayload = {
  src: string;
  alt?: string;
};

export type SerializedImageNode = Spread<
  {
    src: string;
    alt?: string;
    type: 'image';
    version: 1;
  },
  SerializedLexicalNode
>;

function ImageComponent({ src, alt }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} draggable={false} />;
}

export class ImageNode extends DecoratorNode<JSX.Element> {
  __src: string;
  __alt?: string;

  static getType(): string {
    return 'image';
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(node.__src, node.__alt, node.__key);
  }

  constructor(src: string, alt?: string, key?: NodeKey) {
    super(key);
    this.__src = src;
    this.__alt = alt;
  }

  createDOM(): HTMLElement {
    const span = document.createElement('span');
    return span;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return <ImageComponent src={this.__src} alt={this.__alt} />;
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { src, alt } = serializedNode;
    return new ImageNode(src, alt);
  }

  exportJSON(): SerializedImageNode {
    return {
      type: 'image',
      version: 1,
      src: this.__src,
      alt: this.__alt,
    };
  }
}

export function $createImageNode(src: string, alt?: string): ImageNode {
  return new ImageNode(src, alt);
}

export function $isImageNode(node: unknown): node is ImageNode {
  return node instanceof ImageNode;
} 