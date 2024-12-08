import React, { useState } from 'react';
import { searchChatArchive, searchKnowledgeBase } from './services';

const UnifiedSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [filters, setFilters] = useState({ category: 'all', date: '', user: '' });

    const handleSearch = () => {
        const searchFuncs = {
            chat: () => searchChatArchive(searchTerm, filters),
            knowledgeBase: () => searchKnowledgeBase(searchTerm, filters),
        };

        const promises = filters.category === 'all'
            ? Object.values(searchFuncs).map((func) => func())
            : [searchFuncs[filters.category]()];

        Promise.all(promises).then((responses) => {
            const mergedResults = responses.flat();
            setResults(mergedResults);
        });
    };

    return (
        <div className="unified-search">
            <h3>Unified Search</h3>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <div>
                <label>
                    Category:
                    <select
                        value={filters.category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    >
                        <option value="all">All</option>
                        <option value="chat">Chats</option>
                        <option value="knowledgeBase">Knowledge Base</option>
                    </select>
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        value={filters.date}
                        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                    />
                </label>
                <label>
                    User:
                    <input
                        type="text"
                        value={filters.user}
                        onChange={(e) => setFilters({ ...filters, user: e.target.value })}
                    />
                </label>
            </div>
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        {result.title || result.message} - {result.timestamp || result.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UnifiedSearch;