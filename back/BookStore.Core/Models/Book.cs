﻿namespace BookStore.Core.Models
{
    public class Book
    {
        public const int MAX_TITLE_LENGTH = 250;

        private Book(Guid id, string title, string author, decimal price)
        {
            Id = id;
            Title = title;
            Author = author;
            Price = price;
        }

        public Guid Id { get; }
        public string Title { get; } = string.Empty;
        public string Author { get; } = string.Empty;
        public decimal Price { get; }

        public static (Book Book, string Error) Create(Guid id, string title, string author, decimal price)
        {
            var error = string.Empty;

            if(string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                error = "Название не должно быть больше 250 символов";
            }

            var book = new Book(id, title, author, price);

            return (book, error);
        }
    }
}
