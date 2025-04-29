import { SnapshotSerializer } from "vitest";

export default {
    // シリアライズは、文字列のみを対象とする
    test(val: unknown) {
        return typeof val === "string";
    },
    // ハッシュ値を置換する
    serialize(val: string) {
        return `"${val.replace(/([A-Fa-f0-9]{64}.zip)/, 'HASH-REPLACED.zip')}"`
    },
} satisfies SnapshotSerializer;
