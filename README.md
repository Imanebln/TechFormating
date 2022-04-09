# TechFormating Application
Cette application mobile consiste a 

## L’application se présente avec un système d’authentification (SignIn + SignUp):
![img](./ScreenShot/home.png)
## L'interface Sign up :
L'interface qui permet aux clients de s’inscrire et accéder à l'application pour profiter de ses services (**les formations**), en saisissant les champs suivants: **l'adresse email et le password**

![img](./ScreenShot/SignUp.png)

L'utilisateur doit entrer un email valide,  sinon un alert s’affiche lui indiquant comme suit:


## L'interface Sign In :
Les champs **email** et **password** nous permettent la connexion à l’application à travers l'interface **Sign In**:

![img](./ScreenShot/SignIn.png)

L'utilisateur doit se conne cter avec un compte qui existe, sinon un alert s’affiche lui indiquant comme suit:

![img](./ScreenShot/no_user.png)

S'il se trompe dan le mot de passe, un alert s’affichera toujours :

![img](./ScreenShot/wrong_password.png)
L'utilisateur peut meme se connecter avec **Google Provider** fournit par la platforme **Firebase**

## L'interface Accueil :
Cette interface affiche la liste (Ionic sliding list) des **formations** disponibles sur la platforme, il suffit de **Swipe left** et cliquer sur le Boutton **More** pour avoir plus d'informations sur chaque formation.

![img](./ScreenShot/dashboard.png)
![img](./ScreenShot/more_button.png)

En bas de l'interface, s'affiche des **Tabs** qui nous ramene toujours a **l'interface d'acceuil** ou bien pour se deconnecter (**Logout**)

![img](./ScreenShot/tabs.png)

## L'interface Details :
Affiche les details d'une formation:
_Une image representant la formation (le language)_
_Une petite description de la formation._
_La duree de la formation_
_Les prerequies que l'utilisateur doit metriser avant d'entamer la formation_
_Le prix de la formation_

Plus d'un boutton _**ENROLL NOW**_ pour s'inscrire a la formation.

![img](./ScreenShot/details.png)

Avant de s'inscrire a la formation, un **Alert de confirmation** s'affiche pour confirmer si l'utilisateur voudrais bien s'inscrire a cette formation.
![img](./ScreenShot/enroll_confirm.png)

## L'interface Summary:
Une fois l'utilisateur est inscrit a une certaine formation, cette interface lui affiche les nformation de la formation qui a choisi, plus ses informations (**son adresse email**)

![img](./ScreenShot/summary.png)







