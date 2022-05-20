import React from "react";
// https://youtu.be/hBk4nV7q6-w
// original source code
// interface TableProps {
//     items: { id: string }[];
//     renderItem: (item: { id: string }) => React.ReactNode;
// }
//
// export const Table = (props: TableProps) => {
//     return null;
// };
//
// export const Component = () => {
//     return (
//         <Table
//             items={[{ id: "1" }]}
//             renderItem={(item) => {
//                 return null;
//             }}
//         ></Table>
//     );
// };

// change to generic
// 1. 這邊要把 items: { id: string}[] 改成泛型 => TItem
interface TableProps<TItem> {
    // items: { id: string }[];
    // 現在items可接受任何型別
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

export const Table = <TItem, >(props: TableProps<TItem>) => {
    return null;
};

export const Component = () => {
    // 第1個table和第2個table可接受不同的型別
    return (
        <>
            <Table
                items={[{id: "1", firstName: "Burke"}]}
                renderItem={(item) => {
                    // 這邊可以拿到強型別/拿不存在的prop無法通過編譯
                    return `${item.id} ${item.firstName}`
                }}
            ></Table>
            <Table
                items={[{id: "1", name: "Bandit"}]}
                renderItem={(item) => {
                    // 這邊可以拿到強型別
                    return `${item.id} ${item.name}`
                }}
            ></Table>
        </>
    );
};