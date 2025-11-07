import React from 'react';
import Grid from '@mui/material/Grid';
import AccordionDetails from '@mui/material/AccordionDetails';
import Page from '../Page';
import { DetailFieldProps } from './details.model';
import { useDetailsContext } from './DetailsContext';
import Detail from './detail';

type WithFields<T> = {
  fields: DetailFieldProps<T>[];
  values?: T;
  noValuesTemplate?: React.ReactElement;
  children?: never;
};

type WithChildren = {
  children: React.ReactNode;
  fields?: never;
  values?: never;
  noValuesTemplate?: never;
};

export type DetailsContentProps<T> = WithFields<T> | WithChildren;

const DetailsContent = <T,>({ fields, values, noValuesTemplate, children }: DetailsContentProps<T>) => {
  const context = useDetailsContext();

  if (!context) {
    throw new Error('DetailsContent must be used within a Details component using DetailsContext.');
  }

  const { loading } = context;

  return (
    <AccordionDetails sx={{ minHeight: 150, overflowY: 'auto' }}>
      {fields ? (
        <>
          {!loading &&
            !values &&
            (noValuesTemplate ?? (
              <Page sx={{ margin: 0 }}>
                <Page.Subtitle>No Detail Found</Page.Subtitle>
              </Page>
            ))}
          <Grid container spacing={4}>
            {fields.map((field) => {
              if (loading || !values) {
                return null;
              }

              return (
                <Grid key={field.name} {...field.grid}>
                  {field.renderDetailField ? field.renderDetailField(values) : <Detail values={values} {...field} />}
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        children
      )}
    </AccordionDetails>
  );
};

export default DetailsContent;
