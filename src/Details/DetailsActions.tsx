import React from 'react';
import AccordionActions, { AccordionActionsProps } from '@mui/material/AccordionActions';
import { useDetailsContext } from './DetailsContext';
import { DetailActionProps } from './details.model';
import DetailAction from './actions';

type WithActions = {
  actions: DetailActionProps[];
  children?: never;
};

type WithChildren = {
  children: React.ReactNode;
  actions?: never;
};

export type DetailsActionsProps = (WithActions | WithChildren) & AccordionActionsProps;

const DetailsActions: React.FC<DetailsActionsProps> = ({ actions, children, ...props }) => {
  const context = useDetailsContext();

  if (!context) {
    throw new Error('DetailsActions must be used within a Details component using DetailsContext.');
  }

  if (actions?.length && children) {
    throw new Error('DetailsActions cannot accept both actions and children. Please provide only one.');
  }

  return (
    <AccordionActions sx={{ display: 'flex', justifyContent: 'flex-end' }} {...props}>
      {actions ? actions.map((action) => <DetailAction key={action.name} {...action} />) : children}
    </AccordionActions>
  );
};

export default DetailsActions;
