window.requestAnimationFrame = (function () {
   return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function (callback) {
             window.setTimeout(callback, 1000 / 60);
         };
     })();

var canvas;
var device;
var mesh;
var meshes = [];
var mera;
var axis;

var H = 4;


    var b = 1.5 * H;
    var a = 3 * b;

    var ap = a/2;
    var bp = b/2;
    var hp = H/2;

document.addEventListener("DOMContentLoaded", init, false);
function init() {
    canvas = document.getElementById("frontBuffer");
    mera = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);
    mesh = new SoftEngine.Mesh("Triang", 24, 16);
    meshes.push(mesh);
    mesh.Vertices[0] = new HELPER.Vector3(-ap, ap, hp);
    mesh.Vertices[1] = new HELPER.Vector3(-bp, ap, hp);
    mesh.Vertices[2] = new HELPER.Vector3(bp, ap, hp);
    mesh.Vertices[3] = new HELPER.Vector3(ap, ap, hp);
    mesh.Vertices[4] = new HELPER.Vector3(ap, -ap, hp);
    mesh.Vertices[5] = new HELPER.Vector3(bp, -ap, hp);
    mesh.Vertices[6] = new HELPER.Vector3(-bp, -ap, hp);
    mesh.Vertices[7] = new HELPER.Vector3(-ap, -ap, hp);

    mesh.Vertices[8] = new HELPER.Vector3(-bp, bp, hp);
    mesh.Vertices[9] = new HELPER.Vector3(bp, bp, hp);
    mesh.Vertices[10] = new HELPER.Vector3(bp, -bp, hp);
    mesh.Vertices[11] = new HELPER.Vector3(-bp, -bp, hp);

    mesh.Vertices[12] = new HELPER.Vector3(-ap, ap, -hp);
    mesh.Vertices[13] = new HELPER.Vector3(-bp, ap, -hp);
    mesh.Vertices[14] = new HELPER.Vector3(bp, ap, -hp);
    mesh.Vertices[15] = new HELPER.Vector3(ap, ap, -hp);
    mesh.Vertices[16] = new HELPER.Vector3(ap, -ap, -hp);
    mesh.Vertices[17] = new HELPER.Vector3(bp, -ap, -hp);
    mesh.Vertices[18] = new HELPER.Vector3(-bp, -ap, -hp);
    mesh.Vertices[19] = new HELPER.Vector3(-ap, -ap, -hp);

    mesh.Vertices[20] = new HELPER.Vector3(-bp, bp, -hp);
    mesh.Vertices[21] = new HELPER.Vector3(bp, bp, -hp);
    mesh.Vertices[22] = new HELPER.Vector3(bp, -bp, -hp);
    mesh.Vertices[23] = new HELPER.Vector3(-bp, -bp, -hp);

    mesh.Faces[0] = {
        A: 0,
        B: 1,
        C: 6,
        D: 7,
        NA: 2,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };

    mesh.Faces[1] = {
        A: 2,
        B: 3,
        C: 4,
        D: 5,
        NA: 4,
        color: mesh.Faces[0].color
    };
    mesh.Faces[2] = {
        A: 1,
        B: 2,
        C: 9,
        D: 8,
        NA: 2,
        NA2: 4,
        color: mesh.Faces[0].color
    };
    mesh.Faces[3] = {
        A: 11,
        B: 10,
        C: 5,
        D: 6,
        NA: 2,
        NA2: 4,
        color: mesh.Faces[0].color
    };



     mesh.Faces[4] = {
        A: 0 + 12,
        B: 1 + 12,
        C: 6 + 12,
        D: 7 + 12,
        NA: 2,
         color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };

    mesh.Faces[5] = {
        A: 2 + 12,
        B: 3 + 12,
        C: 4 + 12,
        D: 5 + 12,
        NA: 4,
        color: mesh.Faces[4].color
    };
    mesh.Faces[6] = {
        A: 1 + 12,
        B: 2 + 12,
        C: 9 + 12,
        D: 8 + 12,
        NA: 2,
        NA2: 4,
        color: mesh.Faces[4].color
    };
    mesh.Faces[7] = {
        A: 11 + 12,
        B: 10 + 12,
        C: 5 + 12,
        D: 6 + 12,
        NA: 2,
        NA2: 4,
        color: mesh.Faces[4].color
    };







    mesh.Faces[8] = {
        A: 0,
        B: 7,
        C: 19,
        D: 12,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };

    mesh.Faces[9] = {
        A: 0,
        B: 3,
        C: 15,
        D: 12,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };
    mesh.Faces[10] = {
        A: 3,
        B: 4,
        C: 16,
        D: 15,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };
    mesh.Faces[11] = {
        A: 4,
        B: 7,
        C: 19,
        D: 16,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };





    mesh.Faces[12] = {
        A: 8,
        B: 9,
        C: 21,
        D: 20,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };

    mesh.Faces[13] = {
        A: 9,
        B: 10,
        C: 22,
        D: 21,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };
    mesh.Faces[14] = {
        A: 10,
        B: 11,
        C: 23,
        D: 22,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };
    mesh.Faces[15] = {
        A: 11,
        B: 8,
        C: 20,
        D: 23,
        color: new HELPER.Color4(Math.random(), Math.random(), Math.random(), 1)
    };
    

    mera.Position = new HELPER.Vector3(10, 90, 0);
    mera.Target = new HELPER.Vector3(0, 0, 0);

    var cubeA = 10;
    axis = new SoftEngine.Axis();
    axis.FirstPoint = new HELPER.Vector3(-ap, -ap, -hp);
    axis.SecondPoint = new HELPER.Vector3(ap, ap, hp);

    requestAnimationFrame(drawingLoop);
    drawingLoop();

    document.onkeypress = function(event){
        switch (event.key){
            case 'x':
                mesh.Rotation.x = mesh.Rotation.x + 0.05;
                break;
            case 'y':
                mesh.Rotation.y = mesh.Rotation.y + 0.05;
                break;
            case 'z':
                mesh.Rotation.z = mesh.Rotation.z + 0.05;
                break;
            case 'a':
                axis.angle = axis.angle + 0.05;
                break;
            case 'f':
                SoftEngine.enableDottedLine = !SoftEngine.enableDottedLine;
                break;
            case '4':
                var points = [axis.FirstPoint, axis.SecondPoint];
                points = points.map(function (point) {
                    var cDegrees = Math.PI/180;
                    var cosDegrees = Math.cos(cDegrees);
                    var sinDegrees = Math.sin(cDegrees);

                    var y = (point.y * cosDegrees) + (point.z * sinDegrees);
                    var z = (point.y * -sinDegrees) + (point.z * cosDegrees);
                    return new HELPER.Vector3(point.x, y, z);
                });

                axis.FirstPoint = points[0];
                axis.SecondPoint = points[1];
                break;
            case '8':
                points = [axis.FirstPoint, axis.SecondPoint];
                points = points.map(function (point) {
                    var cDegrees = Math.PI/180;
                    var cosDegrees = Math.cos(cDegrees);
                    var sinDegrees = Math.sin(cDegrees);

                    var x = (point.x * cosDegrees) + (point.z * sinDegrees);
                    var z = (point.x * -sinDegrees) + (point.z * cosDegrees);
                    return new HELPER.Vector3(x, point.y, z);
                });

                axis.FirstPoint = points[0];
                axis.SecondPoint = points[1];
                break;
            case '6':
                points = [axis.FirstPoint, axis.SecondPoint];
                points = points.map(function (point) {
                    var cDegrees = Math.PI/180;
                    var cosDegrees = Math.cos(cDegrees);
                    var sinDegrees = Math.sin(cDegrees);

                    var x = (point.x * cosDegrees) + (point.y * sinDegrees);
                    var y = (point.x * -sinDegrees) + (point.y * cosDegrees);
                    return new HELPER.Vector3(x, y, point.z);
                });

                axis.FirstPoint = points[0];
                axis.SecondPoint = points[1];
                break;
        }

        draw();
    };

    // document.getElementById("rangeX").addEventListener("input", function (event) {
    //     mesh.Rotation.x = document.getElementById("rangeX").value / 100;
    //     draw();
    // });
    // document.getElementById("rangeY").addEventListener("input", function (event) {
    //     mesh.Rotation.y = document.getElementById("rangeY").value / 100;
    //     draw();
    // });
    // document.getElementById("rangeZ").addEventListener("input", function (event) {
    //     mesh.Rotation.z = document.getElementById("rangeZ").value / 100;
    //     draw();
    // });
    // document.getElementById("rangeMy").addEventListener("input", function (event) {
    //     axis.angle = document.getElementById("rangeMy").value / 100;
    //     draw();
    // });
    //  document.getElementById("buttonOK").addEventListener("click", function (event) {
    //     var x;
    //     x = document.getElementById("fX").value;
    //     y = document.getElementById("fY").value;
    //     z = document.getElementById("fZ").value;
    //     axis.FirstPoint = new HELPER.Vector3(x, y, z);
    //     x = document.getElementById("sX").value;
    //     y = document.getElementById("sY").value;
    //     z = document.getElementById("sZ").value;
    //     axis.SecondPoint = new HELPER.Vector3(x, y, z);
    //     draw();
    // });

}
function drawingLoop() {
    device.clear();
    //  mesh.Rotation.z += 0.01;
  // mesh.Rotation.y += 0.01;
   // mesh.Rotation.x += 0.01;
    device.render(mera, meshes, axis);
    device.present();
    //requestAnimationFrame(drawingLoop);
}
function draw() {
    device.clear();
    device.render(mera, meshes, axis);
    device.present();
}