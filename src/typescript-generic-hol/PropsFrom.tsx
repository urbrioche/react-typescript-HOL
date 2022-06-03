import React from "react";

// https://youtu.be/VBsKNKEZNnY
const MyComponent = (props: { enabled: boolean }) => {
    return null;
};

class MyOtherComponent extends React.Component<{ enabled: boolean }> {

}

type PropsFrom<TComponent> = TComponent extends React.FC<infer Props>
    ? Props
    : TComponent extends React.Component<infer Props>
        ? Props : never
// 沒有定義具名型別，而是由PropsFrom泛型推論
const props: PropsFrom<typeof MyComponent> = {
    enabled: true,
    // error, 因為MyComponent只有一個enable prop
    // name: 'jerry',
};

const propsClassComponent: PropsFrom<MyOtherComponent> = {
    enabled: true,
    // error, 因為MyComponent只有一個enable prop
    // name: 'jerry',
};

export default MyComponent;