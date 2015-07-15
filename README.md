
# IONIC_TLP2015
Aplicación desarrollada durante la Charla - Taller en TLP Innova 2015

[Diapositivas](http://slides.com/ivanbtrujillo/ionictlp2015)

La aplicación consta de un menu lateral y tres secciones: Lista de clientes ($http y JSON), mapa con marcadores (NGMAP) y linterna usando el flash del dispositivo (NGCordova $cordovaFlashLight).

## Clonar desde Github
Para clonar el repositorio en nuestro PC, ejecutamos el siguiente comando, el cual nos creará una carpeta llamada TLP2015 con el código del proyecto dentro:
```javascript
$ git clone https://github.com/ivanbtrujillo/IONIC_TLP2015.git TLP2015
```

## Plugins
Debemos de instalar el plugin del Flash de la camara con el siguiente comando:
```javascript
cordova plugin add https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git
```


## Añadir plataformas
```javascript
ionic platform add ios / android
```


## Emular
```javascript
ionic emulate ios / android
```


## Lanzar a dispositivo USB
```javascript
ionic run ios / android
```
