import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

export type CopyToClipboardProps = {
  copyText: string;
  tooltipLabels?: {
    copy?: string;
    copied?: string;
  };
  icons?: {
    copy?: React.ReactNode;
    copied?: React.ReactNode;
  };
  resetDelay?: number;
  onCopied?: (text: string) => void;
} & Omit<IconButtonProps, 'onClick'>;

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  copyText,
  tooltipLabels = { copy: 'Copy', copied: 'Copied!' },
  icons = { copy: <ContentCopyIcon />, copied: <CheckIcon /> },
  resetDelay = 5000,
  onCopied,
  size = 'medium',
  color = 'default',
  sx = { p: 0 },
  ...props
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      onCopied?.(copyText);
      setTimeout(() => setCopied(false), resetDelay);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <Tooltip title={copied ? tooltipLabels.copied : tooltipLabels.copy}>
      <IconButton size={size} color={color} sx={sx} onClick={handleCopy} {...props}>
        {copied ? icons.copied : icons.copy}
      </IconButton>
    </Tooltip>
  );
};

export default CopyToClipboard;
