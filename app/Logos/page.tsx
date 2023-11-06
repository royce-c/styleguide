import React from 'react';

const LogoDescriptions = () => {
  return (
    <div className="max-w-sm mx-auto">
      {/* First Logo Description */}
      <div className="p-6 bg-teal-100 text-teal-900 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">The first logo</h2>
        <p className="text-sm">
          The first logo features a compass rose at its center with a prominent directional arrow pointing downwards, integrating a "V" shape that could symbolize "victory" or "valley." It's encircled by two rings that suggest motion or navigation. The color palette consists of different shades of teal, and the background is a light beige. The overall design conveys exploration or guidance.
        </p>
      </div>

      {/* Second Logo Description */}
      <div className="p-6 bg-blue-100 text-blue-900 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">The second logo</h2>
        <p className="text-sm">
          The second logo has a more traditional compass design, with the four cardinal directions N, S, E, and W clearly marked and the compass needle in a prominent position. There are also numbers present, perhaps suggesting degrees of bearing. The compass is framed within two concentric circles with decorative elements, and the color scheme includes teal, coral, and a peach background. This logo suggests precision, orientation, and a classic navigational theme.
        </p>
      </div>

      {/* Third Logo Description */}
      <div className="p-6 bg-green-100 text-green-900 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold mb-2">The third logo</h2>
        <p className="text-sm">
          The third logo illustrates a stylized location pin combined with a globe in the center, conveying the idea of global positioning or international travel. The pin is designed with decorative elements like dotted lines and small triangles, which give it a dynamic and detailed appearance. The color scheme is a gradation of teals on a dark blue background, offering a modern and digital feel.
        </p>
      </div>

      {/* Fourth Logo Description */}
      <div className="p-6 bg-green-300 text-green-900 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">The fourth logo</h2>
        <p className="text-sm">
          The fourth logo is straightforward and clear, featuring a globe enclosed in a circle with dotted lines around it, suggesting a global connection or travel route. Over the globe, there's a banner with the text "WHERE 2 NEXT," indicating a theme of travel and exploration. The entire logo is set against a gradient background that shifts from green to blue, which can be associated with growth, eco-friendliness, or tranquility.
        </p>
      </div>
    </div>
  );
};

export default LogoDescriptions;