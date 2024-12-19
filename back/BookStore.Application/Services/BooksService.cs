﻿using BookStore.Core.Abstractions;
using BookStore.Core.Models;

namespace BookStore.Application.Services
{
    public class BooksService : IBooksService
    {
        private readonly IBooksRepository _booksRepository;

        public BooksService(IBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }

        public async Task<List<Book>> GetAllBooks()
        {
            return await _booksRepository.Get();
        }

        public async Task<Guid> CreateBook(Book book)
        {
            return await _booksRepository.Create(book);
        }

        public async Task<Guid> UpdateBook(Guid id, string title, string author, decimal price)
        {
            return await _booksRepository.Update(id, title, author, price);
        }

        public async Task<Guid> DeleteBook(Guid id)
        {
            return await _booksRepository.Delete(id);
        }
    }
}