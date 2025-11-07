import React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import LinearLoader from '../LinearLoader';
import DetailsContext from './DetailsContext';
import DetailsHeader from './DetailsHeader';
import DetailsContent from './DetailsContent';
import DetailsActions from './DetailsActions';

export type DetailsProps = React.PropsWithChildren<
  {
    loading?: boolean;
    defaultExpanded?: boolean;
  } & AccordionProps
>;

const Details = ({ loading = false, defaultExpanded = true, children, ...props }: DetailsProps) => {
  return (
    <DetailsContext.Provider value={{ loading }}>
      <Accordion square disableGutters elevation={4} defaultExpanded={defaultExpanded} sx={{ position: 'relative' }} {...props}>
        {children}
        <LinearLoader open={loading} />
      </Accordion>
    </DetailsContext.Provider>
  );
};

Details.Header = DetailsHeader;
Details.Content = DetailsContent;
Details.Actions = DetailsActions;

export default Details;
