import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostsSet from './BlogPostsSet';
import { useAppSelector } from '../../../types/types';
import { Provider } from 'react-redux';
import store from '../../../redux/redux-store';

beforeAll(() => {
	Object.defineProperty(window, 'matchMedia', {
	  writable: true,
	  value: jest.fn().mockImplementation(query => ({
		 matches: false,
		 media: query,
		 onchange: null,
		 addListener: jest.fn(), // устаревший метод
		 removeListener: jest.fn(), // устаревший метод
		 addEventListener: jest.fn(),
		 removeEventListener: jest.fn(),
		 dispatchEvent: jest.fn(),
	  })),
	});
 });



describe('BlogPostsSet', () => {
	test('renders without crashing', () => {
		render(<BlogPostsSet />);
		const blogPostsElement = screen.getByTestId('blog-posts-set');
		expect(blogPostsElement).toBeInTheDocument();
	});


	test('displays the correct number of blog posts', () => {
		const mockPosts = [
			{ id: 1, title: 'Post 1', description: 'description 1' },
			{ id: 2, title: 'Post 2', description: 'description 2' },
		];
		render(<BlogPostsSet posts={mockPosts} />);
		const blogPostElements = screen.getAllByTestId('blog-post');
		expect(blogPostElements.length).toBe(mockPosts.length);
	});

	test('displays the correct blog post titles', () => {
		const mockPosts = [
			{ id: 1, title: 'Post 1', description: 'description 1' },
			{ id: 2, title: 'Post 2', description: 'description 2' },
		];
		render(<BlogPostsSet posts={mockPosts} />);
		mockPosts.forEach(post => {
			expect(screen.getByText(post.title)).toBeInTheDocument();
		});
	});

	test('displays the correct blog post description', () => {
		const mockPosts = [
			{ id: 1, title: 'Post 1', description: 'description 1' },
			{ id: 2, title: 'Post 2', description: 'description 2' },
		];

		jest.mock('../../../types/types', () => ({
			useAppSelector: jest.fn().mockReturnValue(mockPosts),
		}));

		render(
			<Provider store={store}>
				<BlogPostsSet />
			</Provider>
		);

		mockPosts.forEach(post => {
			expect(screen.getByText(post.description)).toBeInTheDocument();
		});
	});
});