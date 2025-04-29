// lambda関数のサンプルコード
export const handler = async (event: Event) => {
    console.log("Hello, World!");
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello, World!",
        }),
    };
}