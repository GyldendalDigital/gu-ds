import tokens from "../tokens/output/tokens.json";

export const ColorGroups = () => (
  <div>
    {Object.entries(tokens.primitives.color).map(([rootName, rootValue]) => {
      return (
        <div className="colgap">
          <h2>
            {rootName.charAt(0).toLocaleUpperCase() + rootName.substring(1)}
          </h2>
          {typeof rootValue === "string" ? (
            <div
            style={{
              background: rootValue,
              width: "50rem",
              height: "5rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                background: "rgba(39,39,39,0.4)",
                width: "fit-content",
                color: "white",
                padding: 2,
                fontSize: 14,
              }}
            >
              {rootValue}
            </div>
          </div>
          ) : (
            Object.entries(rootValue).map(([subName, subValue]) => (
                <div
                style={{
                  background: subValue,
                  width: "50rem",
                  height: "5rem",
                  position: "relative",
                }}
              >
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  background: "rgba(39,39,39,0.4)",
                  width: "fit-content",
                  color: "white",
                  padding: 2,
                  fontSize: 14,
                }}
              >
                {subName}
              </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    background: "rgba(39,39,39,0.4)",
                    width: "fit-content",
                    color: "white",
                    padding: 2,
                    fontSize: 14,
                  }}
                >
                  {subValue}
                </div>
              </div>
            ))
          )}
        </div>
      );
    })}
  </div>
);
