// 1) CacheProps
// 2) SsrProps
// 3) Props
// Client + Hooks
// 4) InnerProps

type PasswordInputCacheProps = { label: string };
// cookiego + ile razy udalo Ci sie zalogowac
// cookiego + czy znaki maja byc zakryte czy nie
type PasswordInputSsrProps = PasswordInputCacheProps & {
  cookieValue?: string | null;
};
type PasswordInputProps = PasswordInputSsrProps & {};
