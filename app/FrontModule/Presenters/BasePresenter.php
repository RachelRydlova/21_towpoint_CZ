<?php

declare(strict_types=1);

namespace App\Frontmodule\Presenters;


use Contributte\Translation\LocalesResolvers\Session;
use Nette\Application\UI\Presenter;
use App\Model\BannerModel;
use App\Model\ApiManager;
use Nette\Localization\Translator;


/**
 * Class BasePresenter
 * @package App\Presenters
 */
class BasePresenter extends Presenter
{

    public const AGREEMENT_COOKIE_NAME = 'TOWPOINT_AGREEMENT_COOKIE';

    public static $mainMenu = [
        ':Front:Default:' => 'Chci nabídku',
        ':Front:Default:what' => 'Co nabízíme',
//        ':Front:Default:karavany' => 'Montáž pro karavany',
//        ':Front:Default:voziky' => 'Servis vozíků',
//        ':Front:Default:nosice' => 'Nosiče kol',
        ':Front:Default:how' => 'Jak to funguje',
        ':Front:Default:about' => 'O nás',
        ':Front:Blog:default' => 'Blog'
    ];


    /** @var string */
    public string $locale;

    /** @var string @persistent */
    public string $lang;


    /** @var Translator @inject */
    public $translator;

    /** @var Session @inject */
    public $translatorSessionResolver;



    public function startup()
    {
        parent::startup();
        $this->lang = $this->locale = $this->getParameter('lang');
        if ($this->locale === 'cz') {
            $this->locale = 'cs';
        }
        $this->translatorSessionResolver->setLocale($this->locale);

        bdump($this->translator->translate('messages.test.test'), 'test');
    }


    /**
     * Nastavi souhlas s pouzivanim cookies
     */
    public function handleSetCookieAgreement(): void
    {
        $expire = new \DateTime('+ 6 months');
        $response = $this->getHttpResponse();
        $response->setCookie(self::AGREEMENT_COOKIE_NAME, "cookiesAccepted", $expire->getTimestamp());
        $this->sendPayload();
    }

    /**
     * @return mixed
     */
    public function getAgreementCookie()
    {
        return $this->getHttpRequest()->getCookie(self::AGREEMENT_COOKIE_NAME);
    }

    public function beforeRender(): void
    {
        // Zakladni labely
        $this->template->baseTitle = 'TowPoint';
        // Cookie agreement
        $this->template->cookieAgreement = $this->getAgreementCookie();

    }

}