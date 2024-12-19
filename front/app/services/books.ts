export interface BookRequest {
    title: string;
    author: string;
    price: number;
}

export const getAllBooks = async () => {
    const response = await fetch("http://localhost:5132/Books");
    return response.json();
}


export const createBook = async (bookRequest: BookRequest) => {
    await fetch("http://localhost:5132/Books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookRequest),
    });
}


export const updateBook = async (id: string, bookRequest: BookRequest) => {
    await fetch(`http://localhost:5132/Books/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bookRequest),
    });
}

export const deleteBook = async (id: string) => {
    await fetch(`http://localhost:5132/Books/${id}`, {
        method: "DELETE",
    });
}