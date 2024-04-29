( async () => {
    const id: number = Math.floor(Math.random() * 100) + 1;

    const response: Response = await fetch(`https://dummyjson.com/products/${id}`);
    const data: any = await response.json();
    console.log(data);
})();
