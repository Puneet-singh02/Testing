import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    stages :[
        { duration: "10s", target: 10 },
        // { duration: "20s", target: 20 },
        // { duration: "20s", target: 20 },
        // { duration: "10s", target: 0 },
    ],
    thresholds :{
        http_req_duration:[ "p(95)<500"],
        http_req_failed: ["rate<0.01"],
        checks: ["rate>0.95"]
    }
};

export default function () {
    const response = http.get("http://host.docker.internal:5000");

    check(response, {
        "status is 200": (r) => r.status === 500,
    });

    sleep(1);
}