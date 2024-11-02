"use client";
import { ElementRef, useCallback, useEffect, useRef } from 'react'
import { logoutAction } from '@/layouts/DashboardLayout/DashboardLayoutHeader/ActionsMenu/LogoutMenuItem/logout-action';

const HandleUserInactivity = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const formRef = useRef<ElementRef<"form">>(null);

  const logoutUser = useCallback(() => {
    formRef.current?.requestSubmit()
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(logoutUser, 900000); // 15 minutes
  }, [logoutUser]);

  useEffect(() => {
    // Start timer on mount
    resetTimer();

    // Listen for mousemove events
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);

    return () => {
      // Clean up on unmount
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);

      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <form ref={formRef} action={logoutAction}>
      <input type="hidden" />
    </form>
  )
}

export default HandleUserInactivity
