// draw some axes
var drawAxes = function (pos, scale) {
    var color = new pc.Color(1,0,0);

    var axis = new pc.Vec3();
    var end = new pc.Vec3().copy(pos).add(axis.set(scale,0,0));

    app.renderLine(pos, end, color);

    color.set(0, 1, 0);
    end.sub(axis.set(scale,0,0)).add(axis.set(0,scale,0));
    app.renderLine(pos, end, color);

    color.set(0, 0, 1);
    end.sub(axis.set(0,scale,0)).add(axis.set(0,0,scale));
    app.renderLine(pos, end, color);
}