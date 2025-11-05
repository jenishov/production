import React from 'react';
import { useTranslation } from 'react-i18next';
import { BagButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BagButton />
            {t('Главная страница')}
            <Input />
        </div>
    );
};

export default MainPage;
