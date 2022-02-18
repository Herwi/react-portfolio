import Section from "../UI/Section/Section";
import { H1, H2, H3 } from "../UI/H/H";
import Content from "../UI/Content/Content";
import { Blue, Gray, LightGray, Dark, White } from "../UI/Colors/Colors";

const FirstSection = () => {
    return (
        <Section first>
            <Content>
                <H2><Blue>Hi, my name is</Blue></H2>
                <H1>Mikołaj <Blue>Herw</Blue>art</H1>
                <H2>
                    <Gray>
                        Product Manager
                        &emsp;<LightGray>|</LightGray>&emsp;
                        BI Developer
                        &emsp;<LightGray>|</LightGray>&emsp;
                        Frontend Developer
                    </Gray>
                </H2>
                <H3><LightGray>
                    Active <White>Product Manager</White> and <White>BI Developer</White> looking for new challenges in <White>Frontend Development</White>.<br />
                    I also have some hands-on experience in <White>Node.js</White> earned during hobby and professional projects.<br />
                    I actively develop myself taking part in different <White>courses</White> and <White>reading books</White>.
                </LightGray></H3>
            </Content>
        </Section>
    );
};

export default FirstSection;