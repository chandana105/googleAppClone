import {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  setSearchQuery,
  setShowSuggestions,
  setSearchSuggestions,
  cacheResults,
} from '../store/searchSlice';
import {RootState} from '../store/appStore';
import {YOUTUBE_SUGGESTIONS_API} from '../utils/constants';

const useSearch = () => {
  const {searchQuery, showSuggestions, searchSuggestions, cache} = useSelector(
    (state: RootState) => state.search,
  );
  const dispatch = useDispatch();

  const getSearchSuggestions = useCallback(async () => {
    if (!searchQuery) return;

    if (cache[searchQuery]) {
      dispatch(setSearchSuggestions(cache[searchQuery]));
      return;
    }

    try {
      const encodedQuery = encodeURIComponent(searchQuery);
      const response = await fetch(`${YOUTUBE_SUGGESTIONS_API}${encodedQuery}`);
      const json = await response.json();

      dispatch(setSearchSuggestions(json[1]));
      dispatch(cacheResults({[searchQuery]: json[1]}));
    } catch (error) {
      console.error('Failed to fetch search suggestions:', error);
    }
  }, [dispatch, searchQuery, cache]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, getSearchSuggestions]);

  const updateSearchQuery = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const toggleSuggestions = (show: boolean) => {
    dispatch(setShowSuggestions(show));
  };

  const clearSearchState = () => {
    dispatch(setSearchQuery(''));
    dispatch(setSearchSuggestions([]));
    toggleSuggestions(false);
  };

  return {
    searchQuery,
    updateSearchQuery,
    showSuggestions,
    toggleSuggestions,
    searchSuggestions,
    clearSearchState,
  };
};

export default useSearch;
