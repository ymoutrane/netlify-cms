import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Loader } from '../components/UI';
import EntryListing from '../components/EntryListing/EntryListing';

const Entries = ({ collections, entries, publicFolder, page, onPaginate, isFetching }) => {
  const loadingMessages = [
    'Loading Entries',
    'Caching Entries',
    'This might take several minutes',
  ];

  if (entries) {
    return <EntryListing {...{ collections, entries, publicFolder, page, onPaginate }}/>
  }

  if (isFetching) {
    return <Loader active>{loadingMessages}</Loader>;
  }

  return <div className="nc-collectionPage-noEntries">No Entries</div>;
}

Entries.propTypes = {
  collection: ImmutablePropTypes.map.isRequired,
  collections: ImmutablePropTypes.orderedMap.isRequired,
  publicFolder: PropTypes.string.isRequired,
  page: PropTypes.number,
  entries: ImmutablePropTypes.list,
};

export default Entries;
