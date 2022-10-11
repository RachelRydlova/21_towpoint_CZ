<?php

declare(strict_types=1);

namespace App\Frontmodule\Presenters;


use Nette\Application\UI\Presenter;
use App\Model\BannerModel;
use App\Model\ApiManager;


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
     * zobrazeni popup, zopakovani po 24 hodinach
     * @return void
     * @throws \Nette\Application\AbortException
     */
    public function handlePopUpSeen(): void
    {
        $expire = new \DateTime('+ 24 hours');
        $response = $this->getHttpResponse();
        $response->setCookie('popupseen', 'popupAlreadySeen', $expire->getTimestamp());
        $this->sendPayload();
    }

    /**
     * @return mixed
     */
    public function getAgreementCookie()
    {
        return $this->getHttpRequest()->getCookie(self::AGREEMENT_COOKIE_NAME);
    }

    /**
     * @return mixed
     */
    public function getPopupCookie()
    {
        return $this->getHttpRequest()->getCookie('popupseen');
    }

    public function beforeRender(): void
    {
        // Zakladni labely
        $this->template->baseTitle = 'Jednička v montáži tažných zařízeních | TowPoint';
        // Cookie agreement
        $this->template->cookieAgreement = $this->getAgreementCookie();
        // zda uz byl zobrazen popup
        $this->template->popupSeen = $this->getPopupCookie();

    }

}