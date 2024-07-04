    // export const SortProductByDiscount = (products) => {
    //     products.sort((a,b) => {
    //         return (b.price - b.salePrice) - (a.price - a.salePrice);
    //     })
    //     const newSaleProducts = products.slice(0, 5);
        
    //     return handlePercentDiscount(newSaleProducts);
    // }

    export const handlePercentDiscount = (products) => { 
        const newList = products.map(product => {
            const percentDiscount = 100 - Math.round(product.salePrice * 100 / product.price) ;
            // const price = formatPrice(product.price)
            // const salePrice = formatPrice(product.salePrice)


            return {...product, percentDiscount: percentDiscount}
        })
        return newList;
    }

    export const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat('vi')
        return formatter.format(price)
    }

    export const formatDateCreateOrder = (timestamp) => {
        const d = new Date(timestamp);
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');
        const seconds = d.getSeconds().toString().padStart(2, '0');
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0'); // getMonth() is zero-based
        const year = d.getFullYear();
        const formattedDate = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
        return formattedDate;
    };

    export const getFirstCharacterUser = (name) => {
        const arrCharacter = name.split('')[0]
        return arrCharacter
    } 

    export const formatDateOrderPaypal = (timestamp) => {
        const d = new Date( timestamp );
        const date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
        return date
    } 
    