import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

interface FilterItemProps {
  name: string;
  label: string;
  changeFilter: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error: string | undefined;
}

const FilterItem: React.FC<FilterItemProps> = ({
  changeFilter,
  label,
  name,
  error,
}) => {
  const [errorText, setErrorText] = useState<string>();

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return (
    <div>
      <TextField
        label={label}
        error={!!errorText}
        helperText={errorText}
        name={name}
        variant="outlined"
        size="small"
        onChange={changeFilter}
      />
    </div>
  );
};

export default FilterItem;
